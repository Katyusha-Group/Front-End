export function addNewLesson(num, propsSetter) {
  const tokenJson = localStorage.getItem("authTokens");
  const tokenClass = JSON.parse(tokenJson);
  const token = tokenClass.token.access;

  fetch(apis["courses"]["my_courses"], {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      complete_course_number: num,
    }),
  })
    .then((response) => response.json())
    .then((data) => {})
    .catch((error) => {
      console.error(error);
      propsSetter({ type: fetchFail, payload: getError(error) });
    });
}
