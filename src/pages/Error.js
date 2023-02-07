import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      {/* ^^^ this isn't in your router,
        so it may not have access by default */}
      <main>
        <h1>An error occured!</h1>
        <p>Couldn't find page.</p>
      </main>
    </>
  );
}

export default ErrorPage;
