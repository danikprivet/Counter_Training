function CreateView({
  onIncrementButtonClick,
  onDecrementButtonClick,
  onResetButtonClick,
}
) {
    const counterNode = document.querySelector(".js-counter");
    const resetBtnNode = document.querySelector(".js-reset-btn");
    const incrementBtnNode = document.querySelector(".js-increment-btn");
    const decrementBtnNode = document.querySelector(".js-decrement-btn");

    incrementBtnNode.addEventListener("click", () => {
        onIncrementButtonClick();
    });

    decrementBtnNode.addEventListener("click", () => {
      onDecrementButtonClick();
    });

    resetBtnNode.addEventListener("click", () => {
      onResetButtonClick();
    });
  
    return {
      render({ counter }){
          counterNode.innerHTML = counter;
      }
    }
}