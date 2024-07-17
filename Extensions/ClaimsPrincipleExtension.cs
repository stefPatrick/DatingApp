using System.Security.Claims;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace API.Extensions;

public static class ClaimsPrincipleExtension
{
public static string GetUserName(this ClaimsPrincipal user)
{
    var username= user.FindFirstValue(ClaimTypes.NameIdentifier) ?? throw new Exception("cannot get username from token");
        return username;
}
}
