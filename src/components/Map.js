import React, { useEffect } from "react";

const Map = ({ locations }) => {
    useEffect(() => {
        // 카카오 지도 API 로드
        const { kakao } = window;
        const container = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(37.5665, 126.9780), // 기본 위치 (서울)
            level: 3, // 확대 레벨
        };
        const map = new kakao.maps.Map(container, options);

        // 마커 추가
        locations.forEach((loc) => {
            const markerPosition = new kakao.maps.LatLng(
                loc.coordinates.lat,
                loc.coordinates.lng
            );
            const marker = new kakao.maps.Marker({
                position: markerPosition,
            });
            marker.setMap(map);

            // 마커에 클릭 이벤트 추가 (정보창)
            const infowindow = new kakao.maps.InfoWindow({
                content: `<div style="padding:5px;">${loc.name}</div>`,
            });
            kakao.maps.event.addListener(marker, "click", () => {
                infowindow.open(map, marker);
            });
        });
    }, [locations]);

    return (
        <div
            id="map"
            style={{ width: "100%", height: "400px", marginTop: "20px" }}
        ></div>
    );
};

export default Map;
