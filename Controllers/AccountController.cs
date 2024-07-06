using System.Security.Cryptography;
using System.Text;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class AccountController : BaseApiController
{
    private readonly DataContext _context;
    private readonly ITokenServices _tokenServices;

    public AccountController(DataContext context,ITokenServices tokenServices)
    {
        _context = context;
        _tokenServices = tokenServices;
    }
    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register(RegisterDtO registerDtO)
    {
        if (await UserExists(registerDtO.Username))
            return BadRequest("user name is taken");
       /*  using var hmac = new HMACSHA512();
        var user = new AppUser
        {
            UserName = registerDtO.Username.ToLower(),
            PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDtO.Password)),
            PasswordSalt = hmac.Key

        };
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
       
        return new UserDto
        {
            Username = user.UserName,
            Token= _tokenServices.CreateToken(user)
        }; */
        return Ok();

    }
    private async Task<bool> UserExists(string username)
    {
        return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
    }
    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto loginDtO)
    {
        var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == loginDtO.UserName);
        if (user == null)
        {
            return Unauthorized("invalid user");
        }
        using var hmac=new HMACSHA512(user.PasswordSalt);
        var computeHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDtO.Password));
        for(int i=0;i<computeHash.Length;i++)
        {
            if(computeHash[i]!= user.PasswordHash[i])
            return Unauthorized("invalid password");
        }
         return new UserDto
        {
            Username = user.UserName,
            Token= _tokenServices.CreateToken(user)
        };

    }
}
