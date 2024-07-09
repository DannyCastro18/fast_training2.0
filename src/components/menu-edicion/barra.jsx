function Menu() {
  return (
    <section className="mt-5 bg-white w-14 h-full m-10 text-center ">
      <article className="flex flex-col items-center ">
        <Iconback />
        <Iconedit />
        <Icontext />
        <Iconegrita />
        <Iconeraser />
        <Icontijer />
        <Iconmin />
        <Iconmax />
        <Iconsave />
        <Icondelete />
      </article>
    </section>
  );
}

function Iconback() {
  return (
    <div className="my-5 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.6rem"
        height="3rem"
        viewBox="0 0 12 24"
      >
        <path
          fill="black"
          fillRule="evenodd"
          d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z"
        ></path>
      </svg>
    </div>
  );
}

function Iconedit() {
  return (
    <div className="my-5 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.6rem"
        height="2.6rem"
        viewBox="-1 -2 24 24"
      >
        <path
          fill="black"
          d="m15.092 8.02l-2.829-2.828L16.506.95a1 1 0 0 1 1.414 0l1.415 1.414a1 1 0 0 1 0 1.414l-4.243 4.243zm-1.414 1.415l-9.9 9.9a1 1 0 0 1-1.414 0L.95 17.92a1 1 0 0 1 0-1.414l9.9-9.9zM8.728.243l1.393.704l1.435-.704l-.679 1.46l.68 1.368l-1.384-.664l-1.445.664l.689-1.42zm9.9 7.07l1.393.705l1.435-.704l-.68 1.46l.68 1.368l-1.384-.664l-1.445.664l.69-1.42l-.69-1.408z"
        ></path>
      </svg>
    </div>
  );
}
function Icontext() {
  return (
    <div className="my-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.6rem"
        height="2.6rem"
        viewBox="0 0 512 512"
      >
        <path
          fill="black"
          d="M440 168V88H72v80h64v-48h88v280h-56v32h176v-32h-56V120h88v48h32z"
        ></path>
      </svg>
    </div>
  );
}
function Iconegrita() {
  return (
    <div className="my-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.6rem"
        height="2.6rem"
        viewBox="0 0 15 15"
      >
        <path
          fill="black"
          d="M5.105 12c-.397 0-.681-.088-.853-.264c-.168-.18-.252-.465-.252-.853V4.117c0-.397.086-.681.258-.853c.176-.176.458-.264.847-.264H9.03c1.108 0 2.025.982 2.025 2.185c0 .9-.45 1.634-1.35 2.051c1.162.213 1.814 1.392 1.814 2.245c0 1.031-.528 2.519-2.24 2.519zm3.274-3.997H5.8v2.628h2.579c.521 0 1.25-.51 1.25-1.332c0-.823-.729-1.296-1.25-1.296M5.8 4.37v2.327h2.38c.36 0 1.097-.337 1.097-1.196c0-.86-.797-1.131-1.097-1.131z"
        ></path>
      </svg>
    </div>
  );
}
function Iconeraser() {
  return (
    <div className="my-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.6rem"
        height="2.6rem"
        viewBox="0 0 256 256"
      >
        <path
          fill="black"
          d="M225 80.4L183.6 39a24 24 0 0 0-33.94 0L31 157.66a24 24 0 0 0 0 33.94l30.06 30.06a8 8 0 0 0 5.68 2.34H216a8 8 0 0 0 0-16h-84.7l93.7-93.66a24 24 0 0 0 0-33.94M213.67 103L160 156.69L107.31 104L161 50.34a8 8 0 0 1 11.32 0l41.38 41.38a8 8 0 0 1 0 11.31Z"
        ></path>
      </svg>
    </div>
  );
}
function Icontijer() {
  return (
    <div className="my-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.6rem"
        height="2.6rem"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 6c-3.573 2.225-5.943 3.854-8.55 6M20 18c-2.626-1.636-4.602-2.949-6.5-4.382M8.598 9.54a3 3 0 1 0-3.196-5.08a3 3 0 0 0 3.196 5.08m0 0A89.3 89.3 0 0 0 11.45 12m-2.852 2.46a3 3 0 1 0-3.196 5.079a3 3 0 0 0 3.196-5.078Zm0 0A89.287 89.287 0 0 1 11.45 12"
        ></path>
      </svg>
    </div>
  );
}
function Iconmin() {
  return (
    <div className="my-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.6rem"
        height="2.6rem"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 10h6m2 5l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14"
        ></path>
      </svg>
    </div>
  );
}
function Iconmax() {
  return (
    <div className="my-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.6rem"
        height="2.6rem"
        viewBox="0 0 20 20"
      >
        <g fill="black">
          <path d="M9 6a.75.75 0 0 1 .75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5A.75.75 0 0 1 9 6"></path>
          <path
            fillRule="evenodd"
            d="M2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9m7-5.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11"
            clipRule="evenodd"
          ></path>
        </g>
      </svg>
    </div>
  );
}
function Iconsave() {
  return (
    <div className="my-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.6rem"
        height="2.6rem"
        viewBox="0 0 24 24"
      >
        <path
          fill="black"
          fillRule="evenodd"
          d="M3.49 6.237A2.814 2.814 0 0 1 6.283 3.75h10.742a.75.75 0 0 1 .495.186l2.76 2.424c.621.545.964 1.34.934 2.165l-.344 9.574a2.75 2.75 0 0 1-2.748 2.651H6.113a2.642 2.642 0 0 1-2.621-2.307a48.06 48.06 0 0 1-.064-11.686zm2.794-.987c-.667 0-1.228.5-1.305 1.161l-.06.52a46.56 46.56 0 0 0 .06 11.322c.074.57.56.997 1.134.997h.637V15c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v4.25h.873a1.25 1.25 0 0 0 1.25-1.205l.343-9.573a1.25 1.25 0 0 0-.424-.985L16.75 5.255V7.6A1.75 1.75 0 0 1 15 9.35H9A1.75 1.75 0 0 1 7.25 7.6V5.25zm2.466 0V7.6c0 .138.112.25.25.25h6a.25.25 0 0 0 .25-.25V5.25zm7 14h-7.5V15a.25.25 0 0 1 .25-.25h7a.25.25 0 0 1 .25.25z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}
function Icondelete() {
  return (
    <div className="my-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.6rem"
        height="2.6rem"
        viewBox="0 0 24 24"
      >
        <path
          fill="black"
          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1"
        ></path>
      </svg>
    </div>
  );
}

export default function Medicion() {
  return <Menu />;
}
