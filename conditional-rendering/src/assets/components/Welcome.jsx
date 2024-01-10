export default function ({ setStage }) {
  return (
    <>
      <h1>
        This is a simple choose your own adventure game. You will be given some
        text and some options. Your outcome will depend upon your choices. Get
        it?
      </h1>
      <button onClick={() => setStage(2)}>Got it!</button>
    </>
  );
}
