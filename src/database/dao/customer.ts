import {CustomerModel, CustomerModelInterface} from '../models/customer'

/**
 * Find all customer with having specific organization
 *
 * @param organizationId id of organization
 * @return Promise<CustomerModel[]>
 */
export function findAll(organizationId: number): Promise<CustomerModelInterface[]> {
    // @ts-ignore
    return CustomerModel.findAll({
        include: [{all: true}],
        where: {
            organization_id: organizationId,
        },
        order: [['createdAt', 'ASC']]
    })
}


export function create(customer: CustomerModelInterface): Promise<CustomerModelInterface> {
    // @ts-ignore
    return CustomerModel.create(customer);
}


export function findOne(customerId: number): Promise<CustomerModelInterface> {
    // @ts-ignore
    return CustomerModel.findOne({
        include: [{all: true}],
        where: {
            id: customerId,
        },
        order: [['createdAt', 'DESC']]
    })
}


export async function update(customer: CustomerModelInterface): Promise<CustomerModelInterface> {
    const object = await findOne(customer.id);
    // @ts-ignore
    return object.update(customer);
}


export async function deleteOne(customerId: number): Promise<void> {
    CustomerModel.destroy({
        where: {
            id: customerId
        }
    });
}
