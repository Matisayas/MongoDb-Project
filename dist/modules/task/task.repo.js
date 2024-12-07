"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
class TaskRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(input) {
        return this.prisma.task.create({
            data: {
                title: input.title,
                subtitle: input.subtitle,
                description: input.description,
                status: input.status,
            },
        });
    }
    findOne(id) {
        return this.prisma.task.findUnique({
            where: { id },
        });
    }
    findAll(filter) {
        return this.prisma.task.findMany({
            where: {
                status: filter.status,
            },
        });
    }
    update(input, id) {
        return this.prisma.task.update({
            data: {
                title: input.title,
                subtitle: input.subtitle,
                description: input.description,
                status: input.status,
            },
            where: {
                id,
            },
        });
    }
    delete(id) {
        return this.prisma.task.delete({
            where: { id },
        });
    }
}
exports.TaskRepository = TaskRepository;
//# sourceMappingURL=task.repo.js.map