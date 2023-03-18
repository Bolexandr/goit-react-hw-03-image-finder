import axios from 'axios';

const dataForRequest = {
  q: 'cat',
  page: 1,
  key: '29932644-4e0f39fd65af4cced23d22843',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const BASE_URL = 'https://pixabay.com/api/';
async function pixabeyReq(setings) {
  const finSettingsTorequest = { ...dataForRequest, ...setings };

  const { q, page, key, image_type, per_page, orientation } =
    finSettingsTorequest;

  // const answer = await axios.get(
  //   `${BASE_URL}?q=${q}&page=${page}&key=${key}&image_type=${image_type}&orientation=${orientation}&per_page=${per_page}`
  // );
  const randomPhoto = await axios.get(
    `${BASE_URL}?key=${key}&q=${q}&image_type=${image_type}&orientation=${orientation}&page=${page}&per_page=${per_page}`
  );
  // console.log(finSettingsTorequest);
  console.log(randomPhoto);
  return randomPhoto;
}

export default pixabeyReq;
