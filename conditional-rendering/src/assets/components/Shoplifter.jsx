export default function Shoplifter({ setStage }, { setFriend }) {
  return (
    <>
      <h1>
        You go to the local shops to grab some snackos. You see an average
        looking person pocketing a few items from the shop. They give you a
        friendly smile as you pass them. Whatcha do?
      </h1>
      <div>
        <button onClick={() => [setStage(3), setFriend(false)]}>
          Tell the shopkeeper
        </button>
        <button onClick={() => [setStage(3), setFriend(true)]}>
          You saw nothing!
        </button>
        <button onClick={() => [setStage(4), setFriend(true)]}>
          Pocket some stuff yourself
        </button>
      </div>
    </>
  );
}
