// 축약한 키-값 할당(해체 할당)을 이용 -> 객체를 빠르게 만드는 방법
const landscape = {
    title: 'Landscape',
    photographer: 'Nathan',
    location: [32.7122222, -103.1405556],
};


function determineCityAndState([latitude, longitude]) {
    // Geo lookup would happen here
    // START:region
    const region = {
        city: 'Hobbs',
        county: 'Lea',
        state: {
            name: 'New Mexico',
            abbreviation: 'NM',
        },
    };
    // END:region
    return region;
}

function getCityAndState({ location }) {
    // region 을 반환, 필요한 city, state 만 해체 할당 (동일한 키를 사용)
    const { city, state } = determineCityAndState(location);
    return {
        city,
        state: state.abbreviation,
    };
    // {
    //   city: 'Hobbs',
    //   state: 'NM'
    // }
}

// 좌표를 문자열로 바꾸되 원래 객체의 다른 정보는 그대로 유지
function setRegion({ location, ...details }) {
    const { city, state } = determineCityAndState(location);
    return {
        city,
        state: state.abbreviation,
        ...details,
    };
}
