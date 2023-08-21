"use client";

import { useOrigin } from "@/hooks/useOrigin";
import { useParams } from "next/navigation";
import ApiAlert from "./api-alert";

interface APiListProps {
  entityName: string;
  entityIdName: string;
}

const APiList: React.FC<APiListProps> = ({ entityIdName, entityName }) => {
  const params = useParams();

  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <ApiAlert
        description={`${baseUrl}/${entityName}`}
        title="GET"
        variant="public"
      />
      <ApiAlert
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
        title="GET"
        variant="public"
      />
      <ApiAlert
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
        title="POST"
        variant="admin"
      />
      <ApiAlert
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
        title="PATCH"
        variant="admin"
      />
      <ApiAlert
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
        title="DELTE"
        variant="admin"
      />
    </>
  );
};

export default APiList;
