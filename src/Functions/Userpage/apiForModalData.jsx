import { apis } from "../../assets/apis";
export function apiForModalData(
  x,
  showOrNot,
  showLoading,
  setModalData,
  setShowLesson
) {
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.token.access;
  showLoading();
  fetch(apis["courses"]["id"] + x, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((d) => {
      setModalData(d);
      if (showOrNot) {
        setShowLesson({ flag: true, data: d });
      }
    });
}
