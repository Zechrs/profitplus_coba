const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createDetail(event_module, nature, pic, description, unit, code, source, grade, categoryId) {
    return prisma.detail.create({
      data: {
        event_module,
        nature,
        pic,
        description,
        unit,
        code,
        source,
        grade,
        categoryId,
      },
    });
}
  
async function getAllDetails() {
    return prisma.detail.findMany();
}

async function getAllDetailsWithPagination(pageNumber, pageSize) {
    const skip = (pageNumber - 1) * pageSize;
    const details = await prisma.detail.findMany({
        skip: skip,
        take: pageSize,
    });
    return details;
}


  
async function getDetailById(id) {
    return prisma.detail.findUnique({
        where: { id },
    });
}
  
async function updateDetail(event_module, nature, pic, description, unit, code, source, grade, categoryId) {
    return prisma.detail.update({
        where: { id },
        data: {
        event_module,
        nature,
        pic,
        description,
        unit,
        code,
        source,
        grade,
        categoryId,
        },
    });
}
  
async function deleteDetail(id) {
    return prisma.detail.delete({
        where: { id },
    });
}
  

async function createComponent(name, item, unit, specs, priceperunit, quantity, dataId) {
    return prisma.components.create({
      data: {
        name,
        item,
        unit,
        specs,
        priceperunit,
        quantity,
        dataId,
      },
    });
  }
  
async function getAllComponents() {
    return prisma.components.findMany();
}

async function getAllComponents() {
    return prisma.components.findMany();
}

async function getComponentById(id) {
    return prisma.components.findUnique({
        where: { id },
    });
}

async function updateComponent(id, name, item, unit, specs, priceperunit, quantity, dataId) {
    return prisma.components.update({
        where: { id },
        data: {
        name,
        item,
        unit,
        specs,
        priceperunit,
        quantity,
        dataId,
        },
    });
}

async function deleteComponent(id) {
    return prisma.components.delete({
        where: { id },
    });
}
  
  
module.exports = {
    createDetail,
    getAllDetails,
    getAllDetailsWithPagination,
    getDetailById,
    updateDetail,
    deleteDetail,
    createComponent,
    getAllComponents,
    getComponentById,
    updateComponent,
    deleteComponent
};