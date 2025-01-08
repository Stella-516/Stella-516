import React, { useState } from "react"; // React와 useState 훅을 불러옵니다.
import Icon from "./components/Icon"; // Icon 컴포넌트를 가져옵니다.
import RentalCard from "./components/RentalCard"; // RentalCard 컴포넌트를 가져옵니다.
import DropDown from "./components/DropDown"; // DropDown 컴포넌트를 가져옵니다.
import Map from "./components/Map"; // 카카오 지도 컴포넌트를 가져옵니다.

const App = () => {
  // 샘플 데이터: 가게 이름과 좌표 정보를 포함합니다.
  const sampleLocations = [
    { name: "서울역", coordinates: { lat: 37.5547, lng: 126.9707 } },
    { name: "광화문", coordinates: { lat: 37.5711, lng: 126.9769 } },
    { name: "명동", coordinates: { lat: 37.5609, lng: 126.9850 } },
  ];

  // 지도에 표시할 위치 데이터와 상태 관리
  const [locations, setLocations] = useState(sampleLocations);

  // 선택된 가게 정보 저장
  const [selectedLocation, setSelectedLocation] = useState(null);

  // DropDown에서 선택된 값이 변경될 때 호출되는 핸들러 함수
  const handleDropDownChange = (locationName) => {
    const location = sampleLocations.find((loc) => loc.name === locationName); // 선택된 가게를 검색
    setSelectedLocation(location); // 선택된 가게 정보를 상태에 저장
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* 페이지 헤더 */}
      <header style={{ marginBottom: "20px", textAlign: "center" }}>
        <h1>가게 위치 찾기</h1>
        <p>원하는 가게를 선택하고 지도를 확인하세요!</p>
      </header>

      {/* 아이콘 표시 영역 */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
        {/* Icon 컴포넌트를 사용해 가게 관련 아이콘을 표시 */}
        <Icon name="store" label="가게" />
        <Icon name="location" label="위치" />
        <Icon name="map" label="지도" />
      </div>

      {/* DropDown 컴포넌트: 가게 목록을 선택할 수 있음 */}
      <DropDown
        options={sampleLocations.map((loc) => loc.name)} // 가게 이름만 추출하여 전달
        onChange={handleDropDownChange} // 선택 시 호출되는 함수 전달
      />

      {/* 선택된 가게 정보 표시 */}
      {selectedLocation && (
        <div style={{ marginTop: "20px" }}>
          {/* RentalCard 컴포넌트를 사용하여 가게 정보 표시 */}
          <RentalCard name={selectedLocation.name} coordinates={selectedLocation.coordinates} />
        </div>
      )}

      {/* 지도 컴포넌트: 모든 가게 위치를 지도에 표시 */}
      <Map locations={locations} />
    </div>
  );
};

export default App;
