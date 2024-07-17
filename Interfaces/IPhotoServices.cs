using CloudinaryDotNet.Actions;

namespace API;

public interface IPhotoServices
{
  Task<ImageUploadResult> AddPhotoAsync(IFormFile file);

  Task<DeletionResult> DeletePhotoAsync(string publicId);
}
