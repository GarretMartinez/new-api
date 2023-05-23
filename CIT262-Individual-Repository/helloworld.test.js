import hello from "../utils/hello.js";

it("Should say Garret",()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).toBe("Garret");
})