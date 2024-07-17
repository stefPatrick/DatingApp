using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Cryptography.X509Certificates;

namespace API.Entities;

[Table("Photos")]
public class Photo
{
    public int Id{ get; set; }  
    public required string Url{ get; set; }
    public bool IsMain { get; set; }
    //nav oroperties
    public string? PublicId { get; set; }
    public int AppUserId { get; set; }

    public AppUser AppUser { get; set; }=null!;
}