using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using Microsoft.Net.Http.Headers;

namespace API.Entities;

public class AppUser
{
public int Id { get; set;}

public string? UserName { get; set; }


public byte[] PasswordHash { get; set; }=[];
public byte[] PasswordSalt { get; set; }=[];
}