export default ({ store, redirect }) => {
    if (!store.state.user) {
      console.log("in middleware");
      redirect("/login");
    } else {
      redirect("/");
    }
  };
  