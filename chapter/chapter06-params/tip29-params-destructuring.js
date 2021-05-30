const landscape = {
    title: 'Landscape',
    photographer: 'Nathan',
    equipment: 'Canon',
    format: 'digital',
    src: '/landscape-nm.jpg',
    location: [32.7122222, -103.1405556],
};

const anonymous = {
    title: 'Kids',
    equipment: 'Nikon',
    src: '/garden.jpg',
    location: [38.9675338, -95.2614205],
};

/*// problem
const displayPhoto = (photo) => {
    const title = photo.title;
    const photographer = photo.photographer || 'Anonymous';
    const location = photo.location;
    const url = photo.src;

    const copy = { ...photo };
    delete copy.title;
    delete copy.photographer;
    delete copy.location;
    delete copy.src;

    // 객체 키 이름을 모를 경우 처리 방법
    const additional = Object.keys(copy).map(key => `${key}: ${copy[key]}`);

    return (`
    <img alt="Photo of ${title} by ${photographer}" src="${url}" />
    <div>${title}</div>
    <div>${photographer}</div>
    <div>Latitude: ${location[0]} </div>
    <div>Longitude: ${location[1]} </div>
    <div>${additional.join(' <br/> ')}</div>
  `);
};*/

// alternate
const displayPhotoAlt = (photo) => {
    const {
        title,
        photographer = 'Anonymous',
        location: [latitude, longitude],
        src: url,
        ...other
    } = photo;
    const additional = Object.keys(other).map(key => `${key}: ${other[key]}`);
    return (`
    <img alt="Photo of ${title} by ${photographer}" src="${url}" />
    <div>${title}</div>
    <div>${photographer}</div>
    <div>Latitude: ${latitude} </div>
    <div>Longitude: ${longitude} </div>
    <div>${additional.join(' <br/> ')}</div>
  `);
}

// destructuring parameter variable
const displayPhoto = ({
                          title,
                          photographer = 'Anonymous',
                          location: [latitude, longitude],
                          src: url,
                          ...other
                      }) => {
    const additional = Object.keys(other).map(key => `${key}: ${other[key]}`);
    return (`
    <img alt="Photo of ${title} by ${photographer}" src="${url}" />
    <div>${title}</div>
    <div>${photographer}</div>
    <div>Latitude: ${latitude} </div>
    <div>Longitude: ${longitude} </div>
    <div>${additional.join(' <br/> ')}</div>
  `);
}

console.log(displayPhotoAlt(landscape))
console.log(displayPhotoAlt(anonymous))

console.log(displayPhoto(landscape))
console.log(displayPhoto(anonymous))
