import React from "react";

export default function OpenRequest(props) {
  return (
    <div className="flex flex-col my-4 p-4 max-w-sm bg-white rounded-lg">
      <div>
        <h5 className="font-dm-sans font-bold text-figmaDescription">
          {props.name}
        </h5>
      </div>

      <div>
        <p className="font-inter text-figmaParagraph">
          Beginn: {props.date_start}
        </p>
      </div>

      <div className="mt-2 flex flex-col">
        <div className="my-1 flex">
          <div className="bg-figmaAccept inline-block rounded-lg px-2 py-1">
            {props.confirmed_helpers.length} angenommen
          </div>
        </div>

        <div className="my-1 flex">
          <div className="bg-figmaDeny inline-block rounded-lg px-2 py-1">
            {props.denied_helpers.length} abgelehnt
          </div>
        </div>

        <div className="my-1 flex">
          <div className="bg-figmaOpen inline-block rounded-lg px-2 py-1">
            {props.requested_helpers.length - props.confirmed_helpers.length} offen
          </div>
        </div>
      </div>
    </div>
  );
}
