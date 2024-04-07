export const GetTopOffset = (element: string) => {
  return (
    window.scrollY +
    (document.getElementById(element)?.getBoundingClientRect().top ?? 0)
  );
};
