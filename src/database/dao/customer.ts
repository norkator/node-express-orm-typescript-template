import {CustomerModel, CustomerModelInterface} from '../models/customer'

/**
 * Find all customer with having specific organization
 *
 * @param organizationId id of organization
 * @return Promise<CustomerModel[]>
 */
export function findAll(organizationId: number): Promise<CustomerModel[]> {
    return CustomerModel.findAll({
        include: [{all: true}],
        where: {
            organization_id: organizationId,
        },
        order: [['createdAt', 'ASC']]
    })
}


export function create(customer: CustomerModelInterface): Promise<CustomerModel> {
    return CustomerModel.create(customer);
}


export function findOne(customerId: number): Promise<CustomerModel> {
    return CustomerModel.findOne({
        include: [{all: true}],
        where: {
            id: customerId,
        },
        order: [['createdAt', 'DESC']]
    })
}


export async function update(customer: CustomerModelInterface): Promise<CustomerModel> {
    const object = await findOne(customer.id);
    return object.update(customer);
}
