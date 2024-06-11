import { signIn, signOut, auth } from "@/../auth";

function SignIn() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}

function SignOut() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </>
  );
}

export default async function Auth() {
  const session = await auth(); // Await the session promise
  return (
    <>
      <div>
        {session ? (
          <p>Signed in as {session.user?.email}</p>
        ) : (
          <p>Not signed in</p>
        )}
      </div>
      <SignIn />
      <SignOut />
    </>
  );
}
