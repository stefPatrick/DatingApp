using API.Entities;
using API.Data;
using Microsoft.EntityFrameworkCore;
using API.DTOs;
using AutoMapper;
using AutoMapper.QueryableExtensions;

namespace API;

public class UserRepository(DataContext context,IMapper mapper) : IUserRepository
{
    public async Task<MemberDto?> GetMemberAsync(string userName)
    {
        return await context.Users.Where(x=>x.UserName == userName).
        ProjectTo<MemberDto>(mapper.ConfigurationProvider).SingleOrDefaultAsync();
    }

    public async Task<IEnumerable<MemberDto>> GetMembersAsync()
    {
        return await context.Users.ProjectTo<MemberDto>(mapper.ConfigurationProvider).ToListAsync();
    }

    public async Task<AppUser?> GetUserByIdAsync(int id)
    {
        return await context.Users.FindAsync(id);
    }

    public async Task<AppUser?> GetUserByUserNameAsync(string userName)
    {
        return await context.Users.Include(x=>x.Photos).SingleAsync(x => x.UserName == userName);
    }

    public async Task<IEnumerable<AppUser>> GetUsersAsync()
    {
        return await context.Users.Include(x=>x.Photos).ToListAsync();
    }

    public async Task<bool> SaveAllAsync()
    {
       return await context.SaveChangesAsync()>0;
    }

    public void Update(AppUser user)
    {
        context.Entry(user).State = EntityState.Modified;
    }
}
