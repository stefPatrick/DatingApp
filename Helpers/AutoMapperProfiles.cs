﻿using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
namespace API.Helpers;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {

        CreateMap<AppUser,MemberDto>().ForMember(d=>d.Age, o=>o.MapFrom(s=>s.DateOfBirth.CalculateAge()))
        .ForMember(d=>d.PhotoUrl,o=>o.MapFrom(s=>s.Photos.FirstOrDefault(x=>x.IsMain)!.Url));
        CreateMap<Photo,PhotoDto>();
        CreateMap<MemberUpdateDto,AppUser>();
    }

}
