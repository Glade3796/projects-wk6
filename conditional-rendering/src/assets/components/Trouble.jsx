export default function Trouble({ setStage }, { setFriend }) {
  return (
    <>
      <h1>
        You're spotted by a security guard who's currently hurtling towards you,
        wdyd???
      </h1>
      <div>
        <button onClick={() => setStage(0)}>Fight!</button>
        <button onClick={() => setStage(0)}>Run!</button>
        <button onClick={() => setStage(0)}>Cry</button>
      </div>
    </>
  );
}
