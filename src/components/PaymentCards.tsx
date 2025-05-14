import { MasterCardIcon } from "@assets/icons/MasterCardIcon";
import { PaypalIcon } from "@assets/icons/PaypalIcon";
import { VisaIcon } from "@assets/icons/VisaIcon";
import { useColorPicker } from "@hooks/useColorPicker";

export const PaymentCards = () => {
  const { colorPalette } = useColorPicker();
  const variant50 = colorPalette["50"];
  const variant400 = colorPalette["400"];
  const variant600 = colorPalette["600"];
  const variant800 = colorPalette["800"];

  const radios = [
    {
      name: "Paypal",
      description: "It's the faster, safer way to send and receive money.",
      icon: PaypalIcon,
    },
    {
      name: "Master Card",
      description: " payment-processing corporation worldwide.",
      icon: MasterCardIcon,
    },
    {
      name: "Visa",
      description: " Trusted world leader in digital payment technology",
      icon: VisaIcon,
    },
  ];
  return (
    <div className="h-[356px] w-full rounded-xl border border-gray-50/10 bg-neutral-900 px-4 py-5">
      <ul className="space-y-4">
        {radios.map(({ name, description, icon: Icon }, idx) => (
          <li key={idx}>
            <label htmlFor={name} className="relative block">
              <input
                id={name}
                type="radio"
                defaultChecked={idx == 1 ? true : false}
                name="payment"
                className="peer sr-only"
              />
              <div
                className="flex w-full cursor-pointer items-start gap-x-3 rounded-lg border p-4 shadow-sm duration-200 peer-checked:ring-2"
                style={
                  {
                    backgroundColor: variant50,
                    "--tw-ring-color": `${variant400}`,
                  } as any
                }
              >
                <div className="flex-none">
                  <Icon />
                </div>
                <div>
                  <p className="pr-3 leading-none font-medium" style={{ color: `${variant800}` }}>
                    {name}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{description}</p>
                </div>
              </div>
              <div
                className="absolute top-4 right-4 flex h-4 w-4 flex-none items-center justify-center rounded-full border text-white duration-200 peer-checked:bg-[var(--selected-bg)] peer-checked:text-white"
                style={{ "--selected-bg": `${variant600}` } as any}
              >
                <svg className="h-2.5 w-2.5" viewBox="0 0 12 10">
                  <polyline
                    fill="none"
                    stroke-width="2px"
                    stroke="currentColor"
                    stroke-dasharray="16px"
                    points="1.5 6 4.5 9 10.5 1"
                  ></polyline>
                </svg>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
