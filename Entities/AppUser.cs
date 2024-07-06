using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using Microsoft.Net.Http.Headers;

namespace API.Entities;

public class AppUser
{
public int Id { get; set;}

public required string UserName { get; set; }
public byte[] PasswordHash { get; set; }=[];
public byte[] PasswordSalt { get; set; }=[];

public DateOnly DateOfBirth{ get; set; }

public required string KnownAs { get; set; }

public DateTime Created { get; set; }=DateTime.UtcNow;

public DateTime LastActive { get; set; }=DateTime.UtcNow;
public required string Gender { get; set; }
public string? Introduction { get; set; }
public string? Interests { get; set; }
public string? LookingFor    { get; set; }
public required string City { get; set; }

public required string Country { get; set; }
public List<Photo> Photos  { get; set; }=[];

/* public int GetAge()
{
 return DateOfBirth.CalculateAge();     
}
 */
}

