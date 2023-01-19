import { ActionArgs, ActionFunction } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const data = await fetch(`https://api.ipify.org/?format=json`);
  const { ip } = await data.json();

  return ip;
};
export default function Index() {
  const ip = useActionData<typeof action>();
  return (
    <div className="flex flex-col items-center justify-center h-screen font-serif ">
      <h1 className="text-3xl font-semibold">Fetch your IP!</h1>
      <Form
        method="post"
        className="flex flex-col items-center justify-center w-1/2 bg-gray-100 rounded-lg shadow-2xl h-1/2"
      >
        <div className="flex flex-col items-center justify-center">
          {ip ? (
            <span className="my-4 text-xl">
              Your ip is{" "}
              <a className="font-semibold" href="https://www.whatismyip.com/">
                {ip}
              </a>
            </span>
          ) : (
            ``
          )}
          <label className="text-lg ">
            Press fetch to view your public IP adress
          </label>

          <button
            type="submit"
            className="w-16 h-8 my-2 text-white bg-red-600 rounded-lg shadow-xl"
          >
            fetch
          </button>
        </div>
      </Form>
    </div>
  );
}
