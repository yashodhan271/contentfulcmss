export interface ButtonProps {
    metadata: {
      tags: Array<any>;
    };
    sys: {
      space: object;
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      environment: object;
      revision: number;
      contentType: object;
      locale: string;
    };
    fields: {
      label: string;
      url: string;
      type: string;
      external: boolean;
    };
  }
