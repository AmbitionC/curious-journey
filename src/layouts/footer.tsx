/**
 * @description 底部备注
 * @returns {React.ReactElement}
 */
function Footer(): React.ReactElement {
  return (
    <div className="flex m-auto py-4 pt-[3rem]">
      <div className="max-w-8xl w-full text-gray-400 items-center justify-center text-sm flex">
        <span>Powered by</span>
        <span className="ml-1 text-black">React</span>
      </div>
    </div>
  );
}

export default Footer;
