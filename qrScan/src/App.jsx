// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  return (
    <div className="flex justify-center mt-20 mx-28">
      {/* photo section */}
      <section className="mt-10 text-center">
        <img src="https://i.imgur.com/FQS7fFC.png" className="w-40 h-40 mt-10 p-2 border-2 rounded-md"  />
        <h2 className="mt-2">Proceed to Scan</h2>
        <h2 className="font-semibold">John Doe</h2>
        <h2 className="text-red-400 font-medium">132-465-987-01232</h2>
      </section>
      {/* steps section */}
      <section className="mt-10 ml-14 w-62 ">
        <div className="flex my-5">
          <div className="h-20 w-20 bg-orange-200 rounded-full inline-flex items-center justify-center">
          <img src="./shield.png" className="h-12 w-12 " />
          </div>
          <div className="mx-5 max-w-sm">
            <h3>STEP 1</h3>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              veniam!
            </h3>
            <h3>QR CODE Lorem ipsum dolor sit amet.</h3>
          </div>
        </div>
        <div className="flex my-5 mt-8">
          <div className="h-20 w-20 bg-orange-200 rounded-full inline-flex items-center justify-center">
          <img src="./sound-wave.png" className="h-12 w-12 " />
          </div>
          <div className="mx-5 max-w-sm">
            <h3>STEP 2</h3>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              veniam!
            </h3>
            <h3>QR CODE Lorem ipsum dolor sit amet.</h3>
          </div>
        </div>
        <div className="flex my-5 mt-8">
          <div className="h-20 w-20 bg-orange-200 rounded-full inline-flex items-center justify-center">
          <img src="./anchorBlue.png" className="h-12 w-12 " />
          </div>
          <div className="mx-5 max-w-sm">
            <h3>STEP 3</h3>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              veniam!
            </h3>
            <h3>QR CODE Lorem ipsum dolor sit amet.</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
