function OnScroll({ updates }: { updates: (calc: number) => void }) {
  const SC = () => {
    const calc = document.body.getBoundingClientRect().top;
    updates(calc);
  };
  document.body.onscroll = SC;
  return null;
}

export default OnScroll;
