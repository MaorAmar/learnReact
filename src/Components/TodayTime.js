import React from 'react';

function TodayTime() {
  const today = new Date().toString();
  return <span>{today}</span>
}

export default TodayTime;