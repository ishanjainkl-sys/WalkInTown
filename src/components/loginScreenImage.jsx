function LoginScreenImage() {
  return (
    <div className=" hidden lg:block relative w-full h-full">
      <div className=" bg-black/60 absolute top-0 left-0 w-full h-full z-10"></div>
      <div className=" absolute bottom-20 left-12 flex flex-col gap-2 z-10 text-white">
        <p className=" text-4xl font-semibold">WalkinTown</p>
        <p className=" text-lg font-medium">
          Show best deal to your coustomers
        </p>
      </div>
      <img
        src="./login-page-bg.png"
        className="object-cover w-full h-full"
        alt=""
      />
    </div>
  );
}
export default LoginScreenImage;
