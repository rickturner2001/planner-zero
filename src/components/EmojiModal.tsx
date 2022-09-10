import Picker from "emoji-picker-react";
import { Dispatch, SetStateAction } from "react";
import { IngredientAction, IngredientActionType } from "../types";

const EmojiModal = ({
  dispatch,
  setMenuIsActive,
}: {
  dispatch: Dispatch<IngredientAction>;
  setMenuIsActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <input type="checkbox" id="emoji-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box flex justify-center flex-col">
          <h3 className="font-bold text-lg">Emoji Selection</h3>
          <div className="h-[30rem] flex items-center justify-center">
            <Picker
              showPreview={false}
              onEmojiClick={(e) => {
                dispatch({
                  type: IngredientActionType.SET_EMOJI,
                  payload: e.emoji,
                });
              }}
            />
          </div>

          <div className="modal-action">
            <label
              htmlFor="emoji-modal"
              className="btn"
              onClick={() => {
                setMenuIsActive((prev) => !prev);
              }}
            >
              Quit
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmojiModal;
