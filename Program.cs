using System.Text;
using API;
using API.Data;
using API.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.addApplicationServices(builder.Configuration);


builder.Services.AddIdentityService(builder.Configuration);
var app = builder.Build();
app.UseMiddleware<ExceptionMiddleware>();
// Configure the HTTP request pipeline.

app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200"));
app.UseAuthentication();
app.UseHttpsRedirection(); 
app.UseAuthorization();

app.MapControllers();
using var scope=app.Services.CreateScope();
var services = scope.ServiceProvider;
try
{
 var context=services.GetRequiredService<DataContext>();
 await context.Database.MigrateAsync();
 await Seed.SeedUsers(context);
}
catch (Exception ex)
{
    var logger=services.GetRequiredService<ILogger<Program>>();
    logger.LogError("error happened during migration"+ex.InnerException);
}
app.Run();
