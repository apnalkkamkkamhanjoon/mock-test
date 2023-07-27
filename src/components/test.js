import React, { useState } from "react";

const MockingTest = () => {
  const [studyData, setStudyData] = useState(null);

  const handleClick3 = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setStudyData(json);
      });
  };

  return (
    <div>
      <button onClick={handleClick3}> 샘플 데이터 가져오기</button>
      {studyData && (
        <ul>
          {studyData.map((data) => (
            <p>
              {data.name} : {data.email}
            </p>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MockingTest;
