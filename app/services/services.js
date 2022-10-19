export const getData = async (param) => {
  try {
    const data = await fetch(`http://127.0.0.1:5173/${param}`);
    const dataJSON = await data.json();
    return dataJSON;
  } catch (error) {
    console.log("Error:", error);
  }
};
