import { GithubIcon } from "@assets/icons/GithubIcon";
import { useColorPicker } from "@hooks/useColorPicker";

export const LoginForm = () => {
  const { colorPalette } = useColorPicker();
  const variant50 = colorPalette["50"];
  const variant500 = colorPalette["500"];
  const variant600 = colorPalette["600"];
  const variant800 = colorPalette["800"];
  const variant950 = colorPalette["950"];

  return (
    <div
      className="w-full max-w-sm space-y-8 rounded-xl border border-gray-50/10 p-4 pt-6 text-gray-600"
      style={{ backgroundColor: `${variant50}` }}
    >
      <div className="text-center">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold" style={{ color: `${variant950}` }}>
            Log in to your account
          </h3>
          <p className="text-sm text-gray-800">
            Don't have an account?{" "}
            <a href="#" className="font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="font-medium" style={{ color: `${variant500}` }}>
            Email
          </label>
          <input
            type="email"
            required
            className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none"
            style={{ borderColor: `${variant600}`, color: `${variant500}` }}
          />
        </div>
        <button
          disabled
          className="mt-4 w-full cursor-pointer rounded-lg px-4 py-2 font-medium text-white transition-all duration-300 ease-in-out hover:brightness-120"
          style={{ backgroundColor: `${variant500}` }}
        >
          Sign in
        </button>
      </form>
      <div className="relative">
        <span className="block h-px w-full bg-gray-300"></span>
        <p
          className="absolute inset-x-0 -top-2 mx-auto inline-block w-fit px-2 text-sm"
          style={{ backgroundColor: `${variant50}` }}
        >
          Or continue with
        </p>
      </div>
      <div className="space-y-4 text-sm font-medium">
        <button
          disabled
          className="flex w-full cursor-pointer items-center justify-center gap-x-3 rounded-lg border py-2.5 transition-all hover:brightness-110"
          style={{ borderColor: `${variant600}`, color: `${variant800}` }}
        >
          <GithubIcon className="size-5" />
          Continue with Github
        </button>
      </div>
      <div className="text-center">
        <a className="cursor-pointer hover:underline" style={{ color: `${variant800}` }}>
          Forgot password?
        </a>
      </div>
    </div>
  );
};
