import {
    attribute,
    autoGeneratedHashKey,
    table,
} from '@aws/dynamodb-data-mapper-annotations';

/*
 * This class rappresent a cart item in carts table
 */
@table(process.env.CARTS_TABLE)
class CartRow {
    //TODO choose the right annotation
    @autoGeneratedHashKey()
    id: string;

    @attribute()
    productId: string;

    @attribute()
    customerId: string;

    @attribute()
    quantity: number;

    @attribute()
    totalPrice: number;
}

export default CartRow;