import React from "react";
import DocumentsPanel from "../components/DocumentsPanel";
import {
  DEFAULT_DOCUMENT_CATEGORY_ID,
  DEFAULT_DOCUMENT_SEASON,
  DOCUMENT_CATEGORIES,
  DOCUMENT_SEASONS,
} from "../data/documentsData";

export default function Documents() {
  return (
    <div className="container">
      <DocumentsPanel
        seasons={DOCUMENT_SEASONS}
        defaultSeason={DEFAULT_DOCUMENT_SEASON}
        categories={DOCUMENT_CATEGORIES}
        defaultCategoryId={DEFAULT_DOCUMENT_CATEGORY_ID}
      />
    </div>
  );
}

