const token = '6015181a8aa26201f2f031e66abbb02eaecd51c0381944a6'


export const server_calls = {
    get: async () => {
        const response = await fetch('https://operators-drones-jf.herokuapp.com/api/drones',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        
        if (!response.ok){
            throw new Error('Failed to fetch your data from server..')
        }
        return await response.json()
    },
    create: async (data: any = {}) =>{
        const response = await fetch('https://operators-drones-jf.herokuapp.com/api/drones',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create your drone..')
        }
        return await response.json()
    },
    update: async (id:string, data: any = {}) =>{
        const response = await fetch(`https://operators-drones-jf.herokuapp.com/api/drones/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to update your drone..')
        }
        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`https://operators-drones-jf.herokuapp.com/api/drones/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
        if (!response.ok){
            throw new Error('Failed to delete your drone..')
        }
    }
};