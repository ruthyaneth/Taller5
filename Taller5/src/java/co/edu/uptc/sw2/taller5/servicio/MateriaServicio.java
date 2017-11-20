/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.uptc.sw2.taller5.servicio;

import co.edu.uptc.sw2.taller5.dto.FacultadDTO;
import co.edu.uptc.sw2.taller5.dto.MateriaDTO;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;

/**
 *
 * @author YOHAN TALON 00
 */
public class MateriaServicio {
     /**
     * retorna una lista con los Facultad que se encuentran en la base de datos
     *
     * @return retorna una lista de FacultadDTO
     * @generated
     */
    @GET
    public List<MateriaDTO> obtenerTodosMaterias() {
        return ProveedorInformacion.instance().obtenerTodos(MateriaDTO.class);
    }

    /**
     * @param id identificador del elemento Facultad
     * @return Facultad del id dado
     * @generated
     */
    @GET
    @Path("/{id}")
    public MateriaDTO obtenerMateria(@PathParam("id") Long id) {
        return (MateriaDTO) ProveedorInformacion.instance().obtener(MateriaDTO.class, id);
    }

    /**
     * almacena la informacion de Facultad
     *
     * @param dto Facultad a guardar
     * @return Facultad con los cambios realizados por el proceso de guardar
     * @generated
     */
    @POST
    public MateriaDTO guardarMateria(MateriaDTO dto) {
        return (MateriaDTO) ProveedorInformacion.instance().guardar(dto);
    }

    /**
     * elimina el registro Facultad con el identificador dado
     *
     * @param id identificador del Facultad
     * @generated
     */
    @DELETE
    @Path("/{id}")
    public void borrarMateria(@PathParam("id") Long id) {
        ProveedorInformacion.instance().eliminar(MateriaDTO.class, id);
    }
    
    @GET
    @Path("/consulta")
    public List<MateriaDTO> consultarMateria(@QueryParam("nombre") String nombre){
        List<MateriaDTO> lista=obtenerTodosMaterias();
        List<MateriaDTO> respuesta=new ArrayList<>();
        for(MateriaDTO f:lista){
            if(f.getNombre().toUpperCase().contains(nombre.toUpperCase())){
                respuesta.add(f);
            }
        }
        return respuesta;
    }
}
