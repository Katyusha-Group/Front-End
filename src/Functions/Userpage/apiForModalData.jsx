import { apis } from "../../assets/apis";
export function apiForModalData(
  x,
  showOrNot,
  setModalData,
  setShowLesson
) {
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.token.access;
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
