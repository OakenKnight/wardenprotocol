import { protoInt64 } from "@bufbuild/protobuf";
import { keplrBuildAndBroadcast } from "../newclient";
import { MsgNewSignatureRequest } from "../proto/fusionchain/treasury/tx_pb";
import { Params, useLoaderData } from "react-router-dom";
import { fromHex } from '@cosmjs/encoding';
import { useKeplrAddress } from "../keplr";
import SignatureRequests from "../components/signature_requests";

async function newSignatureRequest(creator: string, keyId: bigint | number, dataForSigning: Uint8Array) {
  await keplrBuildAndBroadcast([
    new MsgNewSignatureRequest({
      creator,
      keyId: protoInt64.parse(keyId),
      dataForSigning,
    }),
  ]);
}

function SignData() {
  const addr = useKeplrAddress();
  const { keyId } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const dataHex = formData.get("data") as string;
    const data = fromHex(dataHex);

    await newSignatureRequest(addr, keyId, data);
  };

  return (
    <>
      <form className="p-4 flex flex-col gap-4" onSubmit={onSubmit}>
        <input type="text" name="data" placeholder="Input data in hex" className="p-2 rounded-md border border-slate-400" />
        <button type="submit" className="bg-slate-200 hover:bg-blue-200 px-4 py-2 rounded-lg block">
          Request signature
        </button>
      </form>

      <SignatureRequests keyId={keyId} />
    </>
  );
}

export function loader({ params }: { params: Params<string> }) {
  if (!params.keyId) {
    throw new Error("No key ID provided");
  }

  return { keyId: protoInt64.parse(params.keyId), };
}

export default SignData;
