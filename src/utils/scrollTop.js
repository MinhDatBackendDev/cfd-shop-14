const scrollTop = (e) => {
  e?.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    500
  );
};

export default scrollTop;
