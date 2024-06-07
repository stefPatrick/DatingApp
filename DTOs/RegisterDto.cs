using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDtO
{
    [Required]
    public string Username { get; set; }
    [Required]
    public string Password { get; set; }
}
