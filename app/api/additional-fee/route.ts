import { AppStrategy, createClient } from '@wix/sdk';
import { additionalFees } from '@wix/ecom/service-plugins';
import { NextRequest, NextResponse } from 'next/server';
import { error } from 'console';

const wixClient = createClient({
  auth: AppStrategy({
    appId: '5e3d205a-cca8-4b0c-8ac2-03bdc4e7476b',
    appSecret: '894c03b7-2c99-4c23-945d-f72f62e1cb1d',
  }),
  modules: { additionalFees },
});

wixClient.additionalFees.provideHandlers({
  calculateAdditionalFees: async (payload) => {
    const { request, metadata } = payload;

    // Add your logic here
    return {
      additionalFees: [
        {
          code: 'gift-wrap',
          name: 'Gift Wrapping',
          price: '5.00',
          taxDetails: { taxable: true },
        },
      ],
      currency: metadata.currency || 'USD',
    };
  },
});

export async function GET(request: NextRequest) {
  console.log('!!! here');

  try {
    return NextResponse.json(
      await wixClient.servicePlugins.processRequest(request)
    );
  } catch (err) {
    return NextResponse.json(err);
  }
}
