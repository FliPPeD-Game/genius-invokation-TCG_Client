import request from '@/request'

const getAllAvatars = () => {
  return request<string, API.Response<AvatarListType[]>>({
    url: 'sys/getProfilePhotos',
    method: 'GET',
  })
}

export {
  getAllAvatars,
}
