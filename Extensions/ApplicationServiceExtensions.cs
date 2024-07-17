using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;

namespace API;

public static class ApplicationServiceExtensions
{

    public static IServiceCollection addApplicationServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddControllers();
        services.AddDbContext<DataContext>(opt =>
        {
            opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
        } 

        );
        services.AddCors();
        services.AddScoped<ITokenServices, TokenService>();
        services.AddScoped<IUserRepository,UserRepository>();
        services.AddScoped<IPhotoServices,PhotoService>();
        services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        services.Configure<CloudinarySettings>(config.GetSection("CloudinarySetting"));
        return services;
    }
}
